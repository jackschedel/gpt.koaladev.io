import React from 'react';
import useStore from '@store/store';

import Avatar from './Avatar';
import MessageContent from './MessageContent';

import { Role } from '@type/chat';
import RoleSelector from './RoleSelector';

// const backgroundStyle: { [role in Role]: string } = {
//   user: 'bg-gray-800',
//   assistant: 'bg-gray-50',
//   system: 'bg-gray-50',
// };
const backgroundStyle = ['bg-neutral-light', 'bg-neutral-base'];

const Message = React.memo(
   ({
      role,
      content,
      messageIndex,
      sticky = false,
   }: {
      role: Role;
      content: string;
      messageIndex: number;
      sticky?: boolean;
   }) => {
      const hideSideMenu = useStore((state) => state.hideSideMenu);
      const advancedMode = useStore((state) => state.advancedMode);

      return (
         <div
        className={`w-full border-b border-black/10/50 text-gray-800 group ${
          backgroundStyle[messageIndex % 2]
               }`}
         >
            <div
               className={`text-base gap-3 md:gap-5 m-auto p-3 md:py-6 flex transition-all ease-in-out 
                 ${hideSideMenu
                     ? 'md:max-w-5xl lg:max-w-5xl xl:max-w-6xl'
                     : 'md:max-w-3xl lg:max-w-3xl xl:max-w-4xl'
                  }`}
            >
               <Avatar role={role} />
               <div className='w-[calc(100%-50px)] '>
                  {advancedMode &&
                     <RoleSelector
                        role={role}
                        messageIndex={messageIndex}
                        sticky={sticky}
                     />}
                  <MessageContent
                     role={role}
                     content={content}
                     messageIndex={messageIndex}
                     sticky={sticky}
                  />
               </div>
            </div>
         </div>
      );
   }
);

export default Message;
