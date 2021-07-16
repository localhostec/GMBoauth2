import environment from '../../../environment';

export default function handler(req, res) {
  const query_params = {
    scope: environment.scope,
    access_type: 'offline',
    include_granted_scopes: 'true',
    state: 'state_parameter_passthrough_value',
    response_type: 'code',
    redirect_uri: environment.redirect_uri,
    client_id: environment.client_id,
  };

  const url = `${environment.GOOGLE_OAUTH_REDIRECT_URL}?${new URLSearchParams(
    query_params
  )}`;

  res.redirect(url);
}
