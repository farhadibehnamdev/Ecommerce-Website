import { NotificationType } from "@/types/notification.interface";
import { Check, Info, CircleX, TriangleAlert, ShieldX } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { NotificationToastProps } from "./notification.types";
import { Progress } from "@nextui-org/react";
import { useNotificationStore } from "@/store/notification.store";

const notificationTypes: Record<NotificationType, string> = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
};

const notificationIcons: Record<NotificationType, ReactNode> = {
  success: <Check width={20} height={20} color="white" />,
  info: <Info width={20} height={20} color="white" />,
  warning: <TriangleAlert width={20} height={20} color="white" />,
  error: <ShieldX width={20} height={20} color="white" />,
};

export const NotificationToast: React.FC<NotificationToastProps> = ({
  notification: { id, message, type, duration = 5000 },
}) => {
  const dismissNotification = useNotificationStore(
    (state) => state.dismissNotification
  );
  const [progressValue, setProgressValue] = useState<number>(100);
  useEffect(() => {
    const interval = duration / 100;
    const intervalId = setInterval(() => {
      setProgressValue((oldValue) =>
        Math.max(oldValue - 100 / (duration / interval), 0)
      );
    });
    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="notification">
      <div className={`notification-icon ${notificationTypes[type]}`}>
        {notificationIcons[type]}
      </div>
      <div className="text-sm font-semibold">{message}</div>
      <button
        className="mr-auto hover:text-white mt-2"
        onClick={() => dismissNotification(id)}
      >
        <CircleX width={20} height={20} />
      </button>
      <Progress
        className="!absolute bottom-1 left-2 right-2 !w-auto"
        value={progessValue}
      />
    </div>
  );
};
