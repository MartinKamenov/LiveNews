import React from 'react';
import { Text, ImageBackground , View, StyleSheet, TouchableHighlight  } from 'react-native';
import PropTypes from 'prop-types';
import constants from '../../constants/constants';

const NewsTypesRowComponent = ({rowTypes, handleSelectionOfType, getImageSourceFromType}) => ( 
    <View style={styles.row}>
        {
            rowTypes.map((type, i) => (
                <TouchableHighlight
                    style={styles.inputWrap}
                    key={i}
                    onPress={() => handleSelectionOfType(type)}>
                    <View>
                        <ImageBackground 
                            style={styles.carouselImage}
                            source={getImageSourceFromType(type)}
                            imageStyle={styles.carouselImageStyle}>
                            <View style={styles.textContainer}>
                                <Text style={styles.typeText}>{type.toUpperCase()}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    
                </TouchableHighlight>
            ))
        }
    </View>
);

const styles = StyleSheet.create({
    carouselImage: {
        width: '100%',
        height: 200
    },
    carouselImageStyle: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 50
    },
    typeText: {
        color: '#0cff89',
        fontWeight: 'bold',
        backgroundColor: '#000000aa',
        padding: 5
    },
    textContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        height: 200
    },
    inputWrap: {
        flex: 1,
        marginBottom: 10,
        width: parseInt(100 / constants.typesOnRow, 10) + '%',
        height: 200
    }
});

NewsTypesRowComponent.propTypes = {
    rowTypes: PropTypes.array.isRequired,
    handleSelectionOfType: PropTypes.func.isRequired,
    getImageSourceFromType: PropTypes.func.isRequired
};
 
export default NewsTypesRowComponent;