import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// render genre, rating , trailer ...
function CatagoryAndRating({ movie }) {
	// TODO: show error page if there is no movie
	if (!movie) return <></>;

	const getTrailer = useQuery(['gettrailer', movie.id], () => api.getTrailer(movie.id));

	const open = () => {
		const key = getTrailer.data?.results[0]?.key ?? null;
		if (!key) {
			Alert.alert(`can't open this ${url}`);
		} else {
			Linking.openURL(`https://www.youtube.com/watch?v=${key}`);
		}
	};

	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={styles.content}>
				{/* Users Scores */}
				<View style={styles.rating}>
					<Text style={styles.score}>
						User Score &nbsp;
						<Entypo name="star" size={16} color="yellow" style={{ marginLeft: 10 }} />
						<Text style={styles.vote}>{movie?.vote_count}</Text>
					</Text>
				</View>
				{/* Trailer */}
				<TouchableWithoutFeedback onPress={open}>
					<Text style={styles.trailer}>
						<Entypo name="controller-play" size={20} color="#f00" />
						&nbsp;
						<Text style={styles.play}>Play Trailer</Text>
					</Text>
				</TouchableWithoutFeedback>
			</View>
			{/* realize date and genre */}
			<View style={styles.details}>
				<Text style={styles.info}>{movie?.release_date}</Text>
				<Text style={styles.info}>{movie?.genres?.map((g) => g.name + ' ,')}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		marginTop: 16,
		alignItems: 'center',
		paddingHorizontal: 20
	},
	rating: {
		borderRightColor: '#999',
		borderRightWidth: 1,
		paddingRight: 10
	},
	score: {
		color: '#fff',
		fontSize: 16,
		letterSpacing: 2
	},
	trailer: {
		textAlign: 'left',
		marginLeft: 10
	},
	play: {
		color: '#fff',
		fontSize: 16,
		letterSpacing: 2
	},
	vote: {
		color: '#fff',
		fontSize: 14
	},
	details: {
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: 10,
		paddingHorizontal: 20,
		paddingVertical: 4,
		borderTopColor: '#222',
		borderTopWidth: 1
	},
	info: {
		fontSize: 16,
		color: '#ccc'
	}
});

export default memo(CatagoryAndRating);
