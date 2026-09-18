import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <View style={styles.profileBox}>
            <Text style={styles.profileEmoji}>👩🏻‍💻</Text>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.greeting}>Hello, I'm ✨</Text>

            <Text style={styles.name}>
              Alfiah Lutfi Sabilah
            </Text>

            <Text style={styles.role}>
              Informatics Student • INF 5B
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            👩🏻‍💼 Data Diri
          </Text>

          <InfoItem
            icon="🎓"
            label="NIM"
            value="2488010032"
          />

          <InfoItem
            icon="🏫"
            label="Asal Sekolah"
            value="SMAN 3 Cirebon"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            💭 Cita-cita
          </Text>

          <View style={styles.dreamBox}>
            <Text style={styles.dreamIcon}>💻</Text>

            <View style={styles.dreamContent}>
              <Text style={styles.dreamTitle}>
                Backend Developer
              </Text>

              <Text style={styles.dreamSubtitle}>
                yang paham keamanan data 🔐
              </Text>
            </View>
          </View>

          <Text style={styles.description}>
            Saya ingin menjadi backend developer yang tidak hanya
            mampu membangun sistem, tetapi juga memahami bagaimana
            cara menjaga data agar tetap aman, terlindungi, dan
            dapat dikelola dengan baik.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🚀 Rencana Menggapai Cita-cita
          </Text>

          <PlanItem
            number="01"
            icon="💻"
            title="Perdalam Backend"
            text="Mempelajari pemrograman backend, database, API, dan teknologi server."
          />

          <PlanItem
            number="02"
            icon="🔐"
            title="Belajar Keamanan Data"
            text="Memahami autentikasi, enkripsi, validasi, dan cara melindungi data pengguna."
          />

          <PlanItem
            number="03"
            icon="🗄️"
            title="Perbanyak Project"
            text="Membangun project nyata agar kemampuan coding dan pengelolaan database semakin berkembang."
          />

          <PlanItem
            number="04"
            icon="📚"
            title="Terus Berkembang"
            text="Mengikuti kursus, pelatihan, komunitas, dan belajar dari pengalaman."
          />
        </View>

        <View style={styles.quoteBox}>
          <Text style={styles.quoteIcon}>🌙</Text>

          <Text style={styles.quote}>
            "Build with code, protect with care."
          </Text>

          <Text style={styles.quoteSmall}>
            — future backend girlie ✦
          </Text>
        </View>

        <Text style={styles.footer}>
          ♡ Keep learning, keep growing.
        </Text>

      </ScrollView>
    </View>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <View style={styles.infoItem}>

      <View style={styles.iconBox}>
        <Text style={styles.infoIcon}>
          {icon}
        </Text>
      </View>

      <View>
        <Text style={styles.label}>
          {label}
        </Text>

        <Text style={styles.value}>
          {value}
        </Text>
      </View>

    </View>
  );
}

function PlanItem({ number, icon, title, text }) {
  return (
    <View style={styles.planItem}>

      <View style={styles.numberBox}>
        <Text style={styles.number}>
          {number}
        </Text>
      </View>

      <View style={styles.planIcon}>
        <Text>
          {icon}
        </Text>
      </View>

      <View style={styles.planContent}>

        <Text style={styles.planTitle}>
          {title}
        </Text>

        <Text style={styles.planText}>
          {text}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#080D1A',
  },

  scrollContainer: {
    padding: 22,
    paddingTop: 40,
    paddingBottom: 35,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  profileBox: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#111B35',
    borderWidth: 1,
    borderColor: '#263B6A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,

    shadowColor: '#5865F2',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  profileEmoji: {
    fontSize: 34,
  },

  headerText: {
    flex: 1,
  },

  greeting: {
    color: '#8EA4D8',
    fontSize: 13,
    marginBottom: 4,
  },

  name: {
    color: '#F1F4FF',
    fontSize: 21,
    fontWeight: '700',
  },

  role: {
    color: '#788AB5',
    fontSize: 12,
    marginTop: 5,
  },

  card: {
    backgroundColor: '#0E1629',
    borderRadius: 22,
    padding: 19,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: '#1B2B4B',
  },

  cardTitle: {
    color: '#C4D2F4',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 17,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 14,

    backgroundColor: '#142342',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 13,
  },

  infoIcon: {
    fontSize: 20,
  },

  label: {
    color: '#7184AF',
    fontSize: 11,
    marginBottom: 3,
  },

  value: {
    color: '#E6EBFA',
    fontSize: 15,
    fontWeight: '600',
  },

  dreamBox: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#111F3A',

    borderRadius: 17,

    padding: 15,
    marginBottom: 14,

    borderWidth: 1,
    borderColor: '#233B69',
  },

  dreamIcon: {
    fontSize: 30,
    marginRight: 13,
  },

  dreamContent: {
    flex: 1,
  },

  dreamTitle: {
    color: '#EAF0FF',
    fontSize: 17,
    fontWeight: '700',
  },

  dreamSubtitle: {
    color: '#9BAEE0',
    fontSize: 13,
    marginTop: 3,
  },

  description: {
    color: '#91A0C0',
    fontSize: 13,
    lineHeight: 21,
  },

  planItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 17,
  },

  numberBox: {
    width: 31,
    height: 31,

    borderRadius: 10,

    backgroundColor: '#182D55',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 8,
  },

  number: {
    color: '#87A8E8',
    fontSize: 10,
    fontWeight: '700',
  },

  planIcon: {
    width: 39,
    height: 39,

    borderRadius: 12,

    backgroundColor: '#131F38',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 11,
  },

  planContent: {
    flex: 1,
  },

  planTitle: {
    color: '#DCE5FA',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },

  planText: {
    color: '#8292B5',
    fontSize: 12,
    lineHeight: 18,
  },

  quoteBox: {
    backgroundColor: '#101A30',

    borderRadius: 20,

    padding: 20,

    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#1C3157',

    marginBottom: 18,
  },

  quoteIcon: {
    fontSize: 24,
    marginBottom: 7,
  },

  quote: {
    color: '#B8C8EF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },

  quoteSmall: {
    color: '#66799F',
    fontSize: 11,
    marginTop: 6,
  },

  footer: {
    color: '#637493',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 3,
  },

});