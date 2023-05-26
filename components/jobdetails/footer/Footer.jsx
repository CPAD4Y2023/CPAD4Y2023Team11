import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useState } from "react";

const Footer = ({ url, jobId }) => {
  const [ jobIdFav, setJobIdFav ] = useState([]);
  const [isJobFav, setIsJobFav ] = useState(false);
  console.log(jobIdFav.includes(jobId))
  console.log(jobIdFav)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={() => {setIsJobFav(!isJobFav); setJobIdFav([... jobIdFav, jobId])}}>
        <Image
          source={jobIdFav.includes(jobId) ? icons.heart : icons.heartOutline}
          onMagicTap={() => imageSourceFav = true}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
