import React, { useContext } from 'react';
import { ChannelContext, UserContext } from '../../App';

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} channel is {channel}
    </div>
  );
};

export default ComponentE;
