import React from 'react'
import {Image,StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SeeMore from './SeeMore';

const ClassificationStats = ({ classificationCount, height, width }) => {
  return (
    <View style={{...styles.container, height, width, justifyContent: 'center' }}>
      <Image style={{...styles.star}} source={require('./images/star.png')}/>
      <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Image source={require('./images/spiral.png')}/>
      </View>
      <View>
        <Text style={[styles.header, { fontSize: height/30 }]}>ALL-TIME U!SCIENTIST CLASSIFICATIONS</Text>
      </View>
      <View >
        <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.classificationCount, { fontSize: height / 3.5, width: width * 0.8 }]}>{classificationCount.toLocaleString()}</Text>
      </View>
      <View style={{ position: 'absolute', bottom: 0, marginBottom: 50 }}>
        <SeeMore height={height/5} width={width} />
      </View>
    </View>
  );
}

ClassificationStats.propTypes = {
  classificationCount: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number
}

const styles = StyleSheet.create({
  header: {
    color: '#A3DDEE',
    fontFamily: 'Poppins',
  },
  classificationCount: {
    color: '#E5FF4D',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  star: {
    left: 0,
    position: 'absolute',
    top: 0,
  }
});

export default ClassificationStats;
