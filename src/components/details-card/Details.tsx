import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize, deviceWidth } from '../../styles/helpers.style';
import theme from '../../styles/theme.style';
import Property from '../Property';

interface Props {
  name: string;
  description: string;
  abv: number;
  ibu: number;
  ebc: number;
  ph: number;
};

const NUM_OF_LINES = 5;

const Details: React.SFC<Props> = (props) => {
  const { name, description, abv, ibu, ebc, ph } = props;
  const [showMoreButton, setShowMoreButton] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const onTextLayout = React.useCallback((e) => {
    setShowMoreButton(e.nativeEvent.lines.length >= NUM_OF_LINES);
  }, []);
  return (
    <View style={styles.container}>
      {
        showMore
        ?
        <>
          <Text style={theme.title}>{name}</Text>
          <Text style={theme.text}>{description}</Text>
          {showMore && <Text style={[theme.text, styles.label]} onPress={() => setShowMore(!showMore)}>Hide</Text>}
        </>
        :
        <>
          <Text style={theme.title}>{name}</Text>
          <Text
            style={theme.text}
            numberOfLines={NUM_OF_LINES}
            onTextLayout={onTextLayout}
          >
            {description}
          </Text>
          {showMoreButton && <Text style={[theme.text, styles.label]} onPress={() => setShowMore(!showMore)}>Show more</Text>}
          <Property title="Abv: " text={abv} />
          <Property title="Ibu: " text={ibu} />
          <Property title="Ebc: " text={ebc} />
          <Property title="pH: " text={ph} />
        </>
      }
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontWeight: '700',
    color: '#000',
    marginVertical: 5,
  }
});