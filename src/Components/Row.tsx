// @flow
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
  subTitle: string;
};
const Row = (props: Props) => {
  const {title, subTitle} = props;
  return (
    <View>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
  },
});
