export * from './RenderCastAbout' 
export * from './RenderCastAbout' 
export * from './RenderHeader' 
export * from './RenderCatagoryAndRating' 
export * from './RenderStoryLine' 

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'column'
    }, 
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: windowHeight / 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS ? 40 : 20,
        paddingHorizontal: 20
    },
    backbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    headerBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    gradient: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'flex-end'
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
    catagoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
        backgroundColor: '#777'
    },
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
