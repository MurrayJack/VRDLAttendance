import 'firebase/firestore';
import { FirestoreCollection } from '@react-firebase/firestore';
import { Screen, Loading, VStack, LinkButton, Center } from '../components';

export default () => {
    const buildAverage = (data: any[]) => {
        let item = 0;
        data.forEach(d => {
            item += d.officials.length;
        });
        return Math.floor(item / data.length);
    };

    return (
        <Screen allowBack caption="Scrim Information">
            <FirestoreCollection path="/scrims/">
                {d =>
                    d.isLoading ? (
                        <Center>
                            <Loading />
                        </Center>
                    ) : (
                        <VStack>
                            <div>Total Scrims: {d.value.length}</div>
                            <div>
                                Average Officials: {buildAverage(d.value)} / scrim
                            </div>
                        </VStack>
                    )
                }
            </FirestoreCollection>
        </Screen>
    );
};
