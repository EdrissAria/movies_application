export const openUrl = async (url) => {
    const isSupported = await Linking.openURL(url);
    if (isSupported) {
        await Linking.openUrl(url)
    } else {
        Alert.alert(`can't open this ${url}`);
    }
}
