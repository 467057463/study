import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setStorage(key: string, value: string){
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error(error)
  }
}

export async function getStorage(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error)    
  }
}