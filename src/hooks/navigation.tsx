import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type NativeStack = NativeStackNavigationProp<RootStackParamList>;

export function useNavigationStackTyped() {
  return useNavigation<NativeStack>();
}
