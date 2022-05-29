function StoryLine({ navigation, movie }) {
	if (!movie) return <></>;

	const [casts, setCasts] = useState([]);
	const [more, setMore] = useState(false);
	const [moreActor, setMoreActor] = useState(false);
	const [showListFooter, setShowListFooter] = useState(true);

	const getCasts = useQuery(['casts', movie.id], () => api.getCasts(movie.id));

    // TODO: remove bottom section
	useEffect(() => {
		let isUnmounted = false;
		!isUnmounted && setCasts(getCasts?.data ? [...getCasts?.data?.cast] : []);
		return () => {
			isUnmounted = true;
		};
	}, [getCasts?.data]);


	const renderActors = ({ item }) => {
		return <MovieActors data={item} navigation={navigation} />;
	};

	const readMore = () => setMore(true);

	return (
		<View style={styles.container}>
			{/* story line */}
			<Text style={styles.title}>Overview</Text>
			<Text style={styles.overview}>
				{more ? (
					movie?.overview
				) : movie?.overview?.length > 200 ? (
					<Text>
						{movie?.overview?.slice(0, 200)}{' '}
						<TouchableWithoutFeedback onPress={readMore}>
							<Text style={styles.more}>Read More...</Text>
						</TouchableWithoutFeedback>
					</Text>
				) : (
					movie?.overview
				)}
			</Text>
			<View style={styles.casts}>
				<Text style={styles.castTitle}>Top Billed Cast</Text>
				<FlatList
					data={moreActor ? casts : casts?.length > 6 ? casts?.slice(0, 6) : casts}
					extraData={casts}
					renderItem={renderActors}
					initialNumToRender={6}
					keyExtractor={(item) => item.id}
					horizontal={true}
					ListFooterComponent={
						showListFooter ? (
							<MoreActors setMoreActor={setMoreActor} setShowListFooter={setShowListFooter} />
						) : null
					}
				/>
			</View>
		</View>
	);
}



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'column'
    }, 
    title: {
        marginTop: 10,
        color: '#eee',
        fontSize: 22,
        textTransform: 'capitalize',
        letterSpacing: 4,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    overview: {
        color: '#ccc', 
        fontSize: 14, 
        marginTop: 10, 
        fontFamily: 'roboto'
    }, 
    more: {
        color: 'red', 
        fontSize: 14
    }, 
    casts: {
        marginTop: 10, 
        paddingBottom: 20 
    }, 
    castTitle: {
        color: '#ddd', 
        fontSize: 16, 
        marginBottom: 10, 
        letterSpacing: 1 
    }
})


export default memo(StoryLine);
