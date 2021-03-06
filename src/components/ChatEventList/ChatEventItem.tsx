import { Content, Media } from "react-bulma-components";
import { formatTime } from "../../helpers";
import ChatEvent from "../../models/chat-event";

interface ChatEventItemProps {
  chatEvent: ChatEvent;
}

const ChatEventItem = ({ chatEvent }: ChatEventItemProps) => {
  const writeEvent = (event: ChatEvent) => {
    switch (event.eventType) {
      case "Enter":
        return <span className="is-italic">enters the room</span>;

      case "Leave":
        return <span className="is-italic">leaves the room</span>;

      case "HighFive":
        return (
          <span className="is-italic">
            high-fives <strong>{event.toUserName}</strong>
          </span>
        );

      default:
        return <div>{event.comment}</div>;
    }
  };

  return (
    <Media renderAs="article">
      <Media.Item align="center">
        <Content>
          <div>
            <strong className="mr-2 ">{chatEvent.fromUserName}</strong>
            {writeEvent(chatEvent)}
          </div>
          <div>
            <time className="is-size-7" dateTime={chatEvent.receivedAt}>
              {formatTime(chatEvent.receivedAt)}
            </time>
          </div>
        </Content>
      </Media.Item>
    </Media>
  );
};

export default ChatEventItem;
