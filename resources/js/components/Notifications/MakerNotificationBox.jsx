import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useStateContext } from "../Providers/ContextProvider";

export default function MakerNotificationBox({ notifications }) {
    //MakerNotificationBoxconsole.log("notifications:::", notifications);
   
    return (
        <div className="bg-[#373839] p-2 shadow-md rounded-lg  maker-notification">
            <div className="flex items-center justify-center gap-2  pb-2 mb-4">
                <div className="text-xl font-semibold text-white">Notifications</div>
                <FontAwesomeIcon icon={faBell} className="text-[#ECB22E] text-xl" />
            </div>
            <div className="notification-body">
                { notifications && notifications.map((notification, index) => (
                    <div
                        key={index}
                        className={`flex notification-row p-1 items-center space-x-1 mb-3 border rounded-xl ${notification.is_read ? "mark-as-read" : "mark-as-not-read"}`}
                    >
                        <img
                            src={`/storage/${notification['pattern'].image}`}
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover notification-user"
                        />
                        <div className="flex-1 ">
                            <span className="notification-account-name block">
                                {notification.message}
                            </span>
                            <span className="text-sm  block">View in Pattern Status for more details!</span>
                        </div>
                        <span className="text-xs text-[#414141]">{notification.time_ago}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
