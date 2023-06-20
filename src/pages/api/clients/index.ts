import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { clientValidationSchema } from 'validationSchema/clients';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getClients();
    case 'POST':
      return createClient();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getClients() {
    const data = await prisma.client
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'client'));
    return res.status(200).json(data);
  }

  async function createClient() {
    await clientValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.invitation?.length > 0) {
      const create_invitation = body.invitation;
      body.invitation = {
        create: create_invitation,
      };
    } else {
      delete body.invitation;
    }
    if (body?.track?.length > 0) {
      const create_track = body.track;
      body.track = {
        create: create_track,
      };
    } else {
      delete body.track;
    }
    const data = await prisma.client.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
