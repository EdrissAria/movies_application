import { useNavigation } from "@react-navigation/native"

export const useNavigate = (route, data) =>{
    const navigation = useNavigation(); 
    return navigation.navigate(route, data)
} 