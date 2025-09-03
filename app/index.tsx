import { ThemedText } from '@/components/ThemedText';
import { usePushNotification } from '@/hooks/usePushNotification';
import React from 'react';
import { View } from 'react-native';

const PushApp = () => {
	const { expoPushToken } = usePushNotification();

	return (
		<View style={{ marginHorizontal: 10, marginTop: 5 }}>
			<ThemedText>Push Notification App</ThemedText>
			<ThemedText>Expo Push Token: {expoPushToken}</ThemedText>
		</View>
	);
}

export default PushApp;
