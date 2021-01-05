import React from "react"
import PushNotification from "react-native-push-notification"
import DeviceInfo from 'react-native-device-info'
import { useSelector } from 'react-redux'

import { BackGround } from "../background"
import { NotificationService } from '../../../core/middleware/notificationService'


export const Notification = () => {
  const deviceId = DeviceInfo.getUniqueId()
  const token = useSelector(state => state.token)
  const handleNotification = async () => {
        const items = await NotificationService.get(token,deviceId)

      if(items !== null){
            for(let index=1; index <= items.length; index++){
                  const element = items[index-1];
                  PushNotification.localNotification({
                        id: element.id,
                        date: new Date(Date.now() + ((60*index)*1000)),
                        title: element.name,
                        message: element.descripcion,
                        invokeApp: true,
                        color: "white"
                  })
            }
      }
  }

  return <BackGround timer={4000} handleBackGround={handleNotification} />
}
