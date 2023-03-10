 import { Oval } from 'react-loader-spinner';

export const Loader = () => {
   return (
     <Oval
       ariaLabel="loading-indicator"
       height={100}
       width={100}
       strokeWidth={5}
       strokeWidthSecondary={5}
       color="#4169E1"
       animationDuration="1.2"
       secondaryColor="white"
       wrapperStyle={{
         position: 'fixed',
         bottom: '30%',
         left: '50%',
         transform: 'translate(-50%,-50%)',
         zIndex: '100',
       }}
     />
   );
};
