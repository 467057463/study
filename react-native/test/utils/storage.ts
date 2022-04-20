import AsyncStorage from '@react-native-async-storage/async-storage';

// 设置
export async function setStorage(key: string, value: string){
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error(error)
  }
}

// 获取
export async function getStorage(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error)    
  }
}

// 删除
export async function removeStorage(key: string){
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}