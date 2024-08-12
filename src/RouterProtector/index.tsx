import React from 'react';
import { isUserloggedin } from '../Utils';
import { Navigate} from 'react-router-dom';

interface ProtectorProps {
    children: React.ReactNode
}


const RouterProtector: React.FC<ProtectorProps> = ({children}) => {


const isloggedin = isUserloggedin()

if (isloggedin) {
    return <>{children}</>
}
return <Navigate to={"/auth"}/>
};

export default RouterProtector;