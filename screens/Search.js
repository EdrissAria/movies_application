import { useEffect, useRef, useState } from 'react';
import {
	StyleSheet,
	View,
	SafeAreaView,
	TextInput,
	TouchableWithoutFeedback,
	FlatList
} from 'react-native';
import SearchResults from '../components/SearchResults';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from 'react-query';
import * as api from '../api/Api';

const Search = ({ navigation }) => {
	const [search, setSearch] = useState();

	function debounce(fn, timeout = 300) {
		let timer;
		return (...args) => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => fn(args), timeout);
		};
	}

	const searchHandler = debounce((query) => {
		setSearch(query);
	});

	const {data: searchResult} = useQuery(['searching', search], () => api.search(search), {
		enabled: !!search
	});

	const clearSearch = () => {
        setSearch('')
	};

	// useEffect(() => {
	//     let isUnmounted = false;
	//     !isUnmounted && setSearchResult(searching?.data ? [...searching?.data?.results] : []);
	//     return () => { isUnmounted = true }
	// }, [searching.data])

	const searchResults = ({ item }) => {
		return <SearchResults navigation={navigation} data={item} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			{/* Search Bar */}
			<View style={styles.search}>
				{dismiss ? (
					<TouchableWithoutFeedback onPress={clearSearch}>
						<AntDesign name="close" size={22} color="rgb(234, 88, 12)" />
					</TouchableWithoutFeedback>
				) : null}
				<TextInput
					ref={desmiss}
					onChangeText={searchHandler}
					value={search}
					placeholder="search here.."
					placeholderTextColor="#bbb"
					keyboardType="web-search"
					style={styles.searchInput}
				/>
				<AntDesign name="search1" size={24} color="rgb(234, 88, 12)" />
			</View>
			{state === 'success' && searchResult.results && (
				<View style={styles.view}>
					<FlatList
						data={searchResult.results}
						extraData={searchResult.results}
						renderItem={searchResults}
						scrollEnabled
						scrollEventThrottle={16}
						decelerationRate="fast"
						contentContainerStyle={{ paddingBottom: 20 }}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	search: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 10,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.9)',
		borderRadius: 30,
		borderColor: 'rgb(234, 88, 12)',
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		borderWidth: 1,
		marginVertical: 20
	},
	container: {
		flex: 1,
		backgroundColor: '#000',
		marginTop: Constants.statusBarHeight,
		paddingHorizontal: 20
	},
	searchInput: {
		color: '#ddd',
		marginHorizontal: 3,
		fontSize: 18,
		width: 230,
		paddingVertical: 2,
		paddingHorizontal: 4
	},
	view: {
		flex: 1,
		paddingBottom: 60
	}
});

export default Search;
