import { useNavigation } from "@react-navigation/native"

export const useNavigate = (route, data) =>{
    const navigation = useNavigation(); 
    const navigateTo = () => navigation.navigate(route, data)
    return [navigateTo]; 
} 