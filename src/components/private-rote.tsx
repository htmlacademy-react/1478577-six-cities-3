import { AuthorizationStatus, AppRoute } from '../const';
import { Navigate } from 'react-router-dom';

type PrivateRoteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRote({ authorizationStatus, children }: PrivateRoteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      children :
      <Navigate to={AppRoute.Login} />
  );
}
