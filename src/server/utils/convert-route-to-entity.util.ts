const mapping: Record<string, string> = {
  clients: 'client',
  feedbacks: 'feedback',
  invitations: 'invitation',
  tracks: 'track',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
