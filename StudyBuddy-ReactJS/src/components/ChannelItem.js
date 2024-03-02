import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
      <ul>
        {daysOfWeek.map((day, index) => (
          <li key={index} className="pt-4 my-14">{day}</li>
        ))}
      </ul>
  );
};
