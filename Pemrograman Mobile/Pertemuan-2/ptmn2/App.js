// IMPORT LIBRARY
import React, { useState, useEffect, useRef } from "react";

// IMPORT COMPONENTS
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView as SafeAreaViewBase,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

// DATA PROFIL
const PROFILE = {
  name: "Alfiah Lutfi Sabilah",
  title: "Mahasiswa Informatika",
  email: "alfiahlutfisabilah2@gmail.com",
  phone: "089678972808",
  location: "Cirebon, Jawa Barat",
  bio: "Mahasiswa Informatika Semester 5 di Universitas Islam Negeri Siber Syekh Nurjati Cirebon.",
};

// DATA SKILL
const SKILLS = [
  {
    id: "1",
    name: "HTML & CSS",
    level: 65,
    color: "#61DAFB",
  },
  {
    id: "2",
    name: "PHP",
    level: 70,
    color: "#02569B",
  },
  {
    id: "3",
    name: "MySQL",
    level: 65,
    color: "#F7DF1E",
  },
  {
    id: "4",
    name: "Java",
    level: 40,
    color: "#3178C6",
  },
  {
    id: "5",
    name: "JavaScript",
    level: 45,
    color: "#4f91d8",
  },
  {
    id: "6",
    name: "Python",
    level: 50,
    color: "#0e6c6c",
  },
  {
    id: "7",
    name: "Analisis Sistem",
    level: 55,
    color: "#1b1be8",
  },
];

// DATA PENGALAMAN & PENDIDIKAN
const SECTIONS = [
  {
    title: "🚀 Pengalaman Organisasi/Kepanitiaan",
    data: [
      {
        id: "e1",
        role: "Anggota Divisi Logistik",
        company: "Social Impact Hub Cirebon by Novoclub",
        period: "Juli - Agustus 2026",
        desc: "Bertanggung jawab membantu kebutuhan logistik kegiatan.",
      },
      {
        id: "e2",
        role: "Anggota Divisi Acara",
        company: "SMANTA Uniday 2025",
        period: "Agustus 2024 - Januari 2025",
        desc: "Membantu persiapan dan pelaksanaan kegiatan acara.",
      },
      {
        id: "e3",
        role: "Anggota Divisi Informasi dan Teknologi",
        company: "OSIS SMAN 3 Cirebon",
        period: "Februari 2022 - Februari 2023",
        desc: "Membantu mempublikasikan informasi.",
      },
    ],
  },

  {
    title: "🎓 Pendidikan",
    data: [
      {
        id: "d1",
        role: "S1 Informatika",
        company:
          "Universitas Islam Negeri Siber Syekh Nurjati Cirebon",
        period: "2024 - sekarang",
        desc: "Mahasiswa Aktif.",
      },
      {
        id: "d2",
        role: "MIPA 1",
        company: "SMAN 3 Cirebon",
        period: "2021 - 2024",
        desc: "Lulus.",
      },
      {
        id: "d3",
        role: "Kelas A",
        company: "SMPN 14 Cirebon",
        period: "2018 - 2021",
        desc: "Lulus.",
      },
    ],
  },
];

// DATA SOSIAL MEDIA
const SOCIAL = [
  {
    id: "s1",
    label: "Github",
    icon: "🐙",
    url: "https://github.com/alfiahlutfi",
  },
  {
    id: "s2",
    label: "LinkedIn",
    icon: "💼",
    url: "https://www.linkedin.com/in/alfiah-lutfi-sabilah-465a69341?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: "s3",
    label: "Portofolio",
    icon: "🌐",
    url: "https://www.instagram.com/alfiahltfii",
  },
];

// COMPONENT SKILL CARD
const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{item.name}</Text>

      <Text style={styles.skillPercent}>
        {item.level}%
      </Text>
    </View>

    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          {
            width: `${item.level}%`,
            backgroundColor: item.color,
          },
        ]}
      />
    </View>
  </View>
);

// COMPONENT TIMELINE CARD
const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >
    <View style={styles.timelineDot} />

    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>
        {item.role}
      </Text>

      <Text style={styles.timelineCompany}>
        {item.company}
      </Text>

      <Text style={styles.timelinePeriod}>
        {item.period}
      </Text>

      <Text style={styles.timelineHint}>
        Ketuk untuk detail →
      </Text>
    </View>
  </TouchableOpacity>
);

// APP
export default function App() {
  // STATE
  const [openToWork, setOpenToWork] = useState(true);
  // TAB
  const [activeTab, setActiveTab] = useState("Info");
  // MODAL RIWAYAT
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // MODAL LINK
  const [linkVisible, setLinkVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  // DOWNLOAD
  const [downloadVisible, setDownloadVisible] = useState(false);
  // FORM
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  // LOADING
  const [sending, setSending] = useState(false);
  // DOWNLOAD BUTTON
  const [pressing, setPressing] = useState(false);

  // ANIMATED AVATAR
  const avatarScale = useRef(
    new Animated.Value(1)
  ).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(avatarScale, {
          toValue: 1.08,
          duration: 1000,
          useNativeDriver: true,
        }),

        Animated.timing(avatarScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // HANDLER MODAL RIWAYAT
  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // HANDLER KIRIM PESAN
  const handleSend = () => {

    // CEK INPUT KOSONG
    if (
      senderName.trim() === "" ||
      message.trim() === ""
    ) {
      Alert.alert(
        "⚠️ Peringatan",
        "Nama dan pesan tidak boleh kosong!"
      );

      return;
    }

    // Simpan nama sebelum state dikosongkan
    const nama = senderName.trim();

    // Tampilkan loading
    setSending(true);

    // Simulasi loading 2 detik
    setTimeout(() => {

      setSending(false);

      // Kosongkan input
      setSenderName("");
      setMessage("");

      // ALERT SUKSES
      Alert.alert(
        "✅ Pesan Terkirim",
        `Pesan dari ${nama} berhasil dikirim!`
      );

    }, 2000);
  };

  // RETURN
  return (
    <SafeAreaViewBase style={styles.safeArea}>

      <StatusBar
        backgroundColor="#1a1a2e"
        barStyle="light-content"
      />

      {/* ==================================================
          HEADER
      ================================================== */}

      <View style={styles.headerBar}>

        <Text style={styles.headerTitle}>
          📄 Curriculum Vitae
        </Text>

        <View style={styles.switchRow}>

          <Text style={styles.switchLabel}>
            {openToWork ? "🟢 Open" : "🔴 Busy"}
          </Text>

          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{
              false: "#555",
              true: "#4ade80",
            }}
            thumbColor={
              openToWork ? "#fff" : "#aaa"
            }
          />

        </View>

      </View>

      {/* ==================================================
          TAB NAVIGATION
      ================================================== */}

      <View style={styles.tabContainer}>

        {/* INFO */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Info" &&
              styles.activeTab,
          ]}
          onPress={() => setActiveTab("Info")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Info" &&
                styles.activeTabText,
            ]}
          >
            👤 Info
          </Text>
        </TouchableOpacity>

        {/* SKILLS */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Skills" &&
              styles.activeTab,
          ]}
          onPress={() => setActiveTab("Skills")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Skills" &&
                styles.activeTabText,
            ]}
          >
            🛠️ Skills
          </Text>
        </TouchableOpacity>

        {/* KONTAK */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Kontak" &&
              styles.activeTab,
          ]}
          onPress={() => setActiveTab("Kontak")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Kontak" &&
                styles.activeTabText,
            ]}
          >
            ✉️ Kontak
          </Text>
        </TouchableOpacity>

      </View>

      {/* ==================================================
          KEYBOARD AVOIDING VIEW
      ================================================== */}

      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : "height"
        }
        keyboardVerticalOffset={
          Platform.OS === "ios" ? 0 : 20
        }
      >

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          {/* ==================================================
              TAB INFO
          ================================================== */}

          {activeTab === "Info" && (
            <>

              {/* PROFILE */}
              <View style={styles.profileSection}>

                {/* ANIMATED AVATAR */}
                <Animated.Image
                  source={require("./assets/alfiah.jpeg")}
                  style={[
                    styles.avatar,
                    {
                      transform: [
                        {
                          scale: avatarScale,
                        },
                      ],
                    },
                  ]}
                />

                {openToWork && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      ✅ Open to Work
                    </Text>
                  </View>
                )}

                <Text style={styles.profileName}>
                  {PROFILE.name}
                </Text>

                <Text style={styles.profileTitle}>
                  {PROFILE.title}
                </Text>

                <Text style={styles.profileBio}>
                  {PROFILE.bio}
                </Text>

                <View style={styles.contactRow}>

                  <Text style={styles.contactItem}>
                    📧 {PROFILE.email}
                  </Text>

                  <Text style={styles.contactItem}>
                    📍 {PROFILE.location}
                  </Text>

                </View>

                <Text style={styles.contactItem}>
                  📱 {PROFILE.phone}
                </Text>

                {/* SOCIAL MEDIA */}
                <View style={styles.socialRow}>

                  {SOCIAL.map((s) => (
                    <TouchableOpacity
                      key={s.id}
                      style={styles.socialBtn}
                      onPress={() => {
                        setSelectedLink(s.url);
                        setLinkVisible(true);
                      }}
                      activeOpacity={0.8}
                    >

                      <Text style={styles.socialIcon}>
                        {s.icon}
                      </Text>

                      <Text style={styles.socialLabel}>
                        {s.label}
                      </Text>

                    </TouchableOpacity>
                  ))}

                </View>

                {/* DOWNLOAD CV */}
                <Pressable
                  style={({ pressed }) => [
                    styles.downloadBtn,
                    pressed &&
                      styles.downloadBtnPressed,
                  ]}
                  onPressIn={() =>
                    setPressing(true)
                  }
                  onPressOut={() =>
                    setPressing(false)
                  }
                  onPress={() =>
                    setDownloadVisible(true)
                  }
                >

                  <Text
                    style={styles.downloadBtnText}
                  >
                    {pressing
                      ? "⏳ Mengunduh..."
                      : "⬇️ Download CV (PDF)"}
                  </Text>

                </Pressable>

              </View>

              {/* RIWAYAT */}
              <View style={styles.sectionBox}>

                <Text style={styles.sectionTitle}>
                  📋 Riwayat
                </Text>

                <Text style={styles.sectionSubtitle}>
                  Ketuk kartu untuk melihat detail.
                </Text>

                <SectionList
                  sections={SECTIONS}
                  keyExtractor={(item) =>
                    item.id
                  }
                  renderItem={({ item }) => (
                    <TimelineCard
                      item={item}
                      onPress={handleCardPress}
                    />
                  )}
                  renderSectionHeader={({
                    section: { title },
                  }) => (
                    <View
                      style={styles.sectionHeader}
                    >
                      <Text
                        style={
                          styles.sectionHeaderText
                        }
                      >
                        {title}
                      </Text>
                    </View>
                  )}
                  scrollEnabled={false}
                  ItemSeparatorComponent={() => (
                    <View style={{ height: 10 }} />
                  )}
                  SectionSeparatorComponent={() => (
                    <View style={{ height: 16 }} />
                  )}
                />

              </View>

            </>
          )}

          {/* ==================================================
              TAB SKILLS
          ================================================== */}

          {activeTab === "Skills" && (
            <View style={styles.sectionBox}>

              <Text style={styles.sectionTitle}>
                🛠️ Keahlian
              </Text>

              <Text style={styles.sectionSubtitle}>
                Kemampuan yang dikuasai.
              </Text>

              <FlatList
                data={SKILLS}
                keyExtractor={(item) =>
                  item.id
                }
                renderItem={({ item }) => (
                  <SkillCard item={item} />
                )}
                scrollEnabled={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 8 }} />
                )}
              />

            </View>
          )}

          {/* ==================================================
              TAB KONTAK
          ================================================== */}

          {activeTab === "Kontak" && (
            <View style={styles.sectionBox}>

              <Text style={styles.sectionTitle}>
                ✉️ Hubungi Saya
              </Text>

              <Text style={styles.sectionSubtitle}>
                Isi form di bawah untuk mengirim pesan.
              </Text>

              {/* NAMA */}
              <TextInput
                style={styles.textInput}
                placeholder="Nama Anda"
                placeholderTextColor="#888"
                value={senderName}
                onChangeText={setSenderName}
                returnKeyType="next"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="words"
                editable={!sending}
              />

              {/* PESAN */}
              <TextInput
                style={[
                  styles.textInput,
                  styles.textArea,
                ]}
                placeholder="Tulis pesan Anda di sini..."
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                keyboardType="default"
                editable={!sending}
              />

              {/* LOADING / BUTTON */}
              {sending ? (

                <View style={styles.loadingRow}>

                  <ActivityIndicator
                    size="large"
                    color="#7c3aed"
                  />

                  <Text
                    style={styles.loadingText}
                  >
                    Mengirim pesan...
                  </Text>

                </View>

              ) : (

                <Button
                  title="✉️ Kirim Pesan"
                  color="#7c3aed"
                  onPress={handleSend}
                />

              )}

            </View>
          )}

          <View style={{ height: 50 }} />

        </ScrollView>

      </KeyboardAvoidingView>

      {/* ==================================================
          MODAL RIWAYAT
      ================================================== */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() =>
          setModalVisible(false)
        }
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalBox}>

            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>
                  {selectedItem.role}
                </Text>

                <Text style={styles.modalCompany}>
                  {selectedItem.company}
                </Text>

                <Text style={styles.modalPeriod}>
                  🗓️ {selectedItem.period}
                </Text>

                <View style={styles.modalDivider} />

                <Text style={styles.modalDesc}>
                  {selectedItem.desc}
                </Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text
                style={
                  styles.modalCloseBtnText
                }
              >
                ✕ Tutup
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

      {/* ==================================================
          MODAL SOSIAL MEDIA
      ================================================== */}

      <Modal
        visible={linkVisible}
        animationType="fade"
        transparent
        onRequestClose={() =>
          setLinkVisible(false)
        }
      >

        <View style={styles.linkModalOverlay}>

          <View style={styles.linkModalBox}>

            <Text
              style={styles.linkModalTitle}
            >
              🔗 Link Sosial Media
            </Text>

            <Text
              style={styles.linkModalText}
            >
              {selectedLink}
            </Text>

            <TouchableOpacity
              style={
                styles.linkModalCloseBtn
              }
              onPress={() =>
                setLinkVisible(false)
              }
            >
              <Text
                style={
                  styles.linkModalCloseText
                }
              >
                ✕ Tutup
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

      {/* ==================================================
          MODAL DOWNLOAD
      ================================================== */}

      <Modal
        visible={downloadVisible}
        animationType="fade"
        transparent
        onRequestClose={() =>
          setDownloadVisible(false)
        }
      >

        <View
          style={
            styles.downloadModalOverlay
          }
        >

          <View
            style={
              styles.downloadModalBox
            }
          >

            <Text
              style={
                styles.downloadModalIcon
              }
            >
              ⬇️
            </Text>

            <Text
              style={
                styles.downloadModalTitle
              }
            >
              Download CV
            </Text>

            <Text
              style={
                styles.downloadModalText
              }
            >
              CV sedang diunduh...
            </Text>

            <ActivityIndicator
              size="large"
              color={COLORS.accentLight}
              style={{
                marginBottom: 20,
              }}
            />

            <TouchableOpacity
              style={
                styles.downloadModalCloseBtn
              }
              onPress={() =>
                setDownloadVisible(false)
              }
            >
              <Text
                style={
                  styles.downloadModalCloseText
                }
              >
                OK
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaViewBase>
  );
}

// COLORS
const COLORS = {
  bg: "#0f0f1a",
  card: "#1a1a2e",
  cardBorder: "#2d2d44",
  accent: "#7c3aed",
  accentLight: "#a78bfa",
  accentGold: "#f59e0b",
  text: "#f0f0f0",
  textMuted: "#9ca3af",
  textDim: "#6b7280",
  success: "#4ade80",
  white: "#ffffff",
};

// STYLES
const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  keyboardContainer: {
    flex: 1,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 20,
  },

  // HEADER
  headerBar: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    elevation: 4,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  switchLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },

  // TAB
  tabContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: COLORS.accent,
  },

  tabText: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },

  activeTabText: {
    color: COLORS.white,
  },

  // PROFILE
  profileSection: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: COLORS.card,
    marginBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomWidth: 2,
    borderColor: COLORS.accent,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: COLORS.accent,
    marginBottom: 10,
  },

  badge: {
    backgroundColor: "#052e16",
    borderWidth: 1,
    borderColor: COLORS.success,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },

  badgeText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: "700",
  },

  profileName: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },

  profileTitle: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 14,
    textAlign: "center",
  },

  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 16,
  },

  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 6,
  },

  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4,
  },

  // SOCIAL
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
    marginBottom: 20,
  },

  socialBtn: {
    alignItems: "center",
    backgroundColor: "#16213e",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  socialIcon: {
    fontSize: 20,
    marginBottom: 4,
  },

  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: "600",
  },

  // DOWNLOAD
  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 50,
    elevation: 4,
  },

  downloadBtnPressed: {
    backgroundColor: "#5b21b6",
    transform: [{ scale: 0.96 }],
  },

  downloadBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  // SECTION
  sectionBox: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },

  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    fontStyle: "italic",
    marginBottom: 16,
  },

  sectionHeader: {
    backgroundColor: "#0f172a",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },

  sectionHeaderText: {
    color: COLORS.accentLight,
    fontWeight: "700",
    fontSize: 13,
  },

  // SKILL
  skillCard: {
    backgroundColor: "#16213e",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  skillName: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 13,
  },

  skillPercent: {
    color: COLORS.accentLight,
    fontWeight: "700",
    fontSize: 13,
  },

  progressBg: {
    height: 6,
    backgroundColor: "#0f172a",
    borderRadius: 4,
    overflow: "hidden",
  },

  progressFill: {
    height: 6,
    borderRadius: 4,
  },

  // TIMELINE
  timelineCard: {
    flexDirection: "row",
    backgroundColor: "#16213e",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },

  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.accent,
    marginTop: 4,
    marginRight: 12,
  },

  timelineContent: {
    flex: 1,
  },

  timelineRole: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 2,
  },

  timelineCompany: {
    color: COLORS.accentLight,
    fontSize: 13,
    marginBottom: 2,
  },

  timelinePeriod: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginBottom: 6,
  },

  timelineHint: {
    color: COLORS.accentGold,
    fontSize: 11,
    fontStyle: "italic",
  },

  // FORM
  textInput: {
    backgroundColor: "#0f172a",
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical:
      Platform.OS === "ios" ? 14 : 10,
    fontSize: 14,
    marginBottom: 12,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 10,
  },

  loadingText: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: "600",
  },

  // MODAL RIWAYAT
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
  },

  modalBox: {
    backgroundColor: "#1e1b4b",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 28,
    borderTopWidth: 3,
    borderColor: COLORS.accent,
  },

  modalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 4,
  },

  modalCompany: {
    color: COLORS.accentLight,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },

  modalPeriod: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginBottom: 16,
  },

  modalDivider: {
    height: 1,
    backgroundColor: COLORS.cardBorder,
    marginBottom: 16,
  },

  modalDesc: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },

  modalCloseBtn: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  modalCloseBtnText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  // MODAL LINK
  linkModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  linkModalBox: {
    width: "90%",
    backgroundColor: "#1e1b4b",
    borderRadius: 20,
    padding: 24,
    borderWidth: 2,
    borderColor: COLORS.accent,
  },

  linkModalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },

  linkModalText: {
    color: COLORS.accentLight,
    fontSize: 13,
    textAlign: "center",
    marginBottom: 24,
  },

  linkModalCloseBtn: {
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },

  linkModalCloseText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
  },

  // DOWNLOAD MODAL
  downloadModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  downloadModalBox: {
    width: "85%",
    backgroundColor: "#1e1b4b",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.accent,
  },

  downloadModalIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  downloadModalTitle: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 8,
  },

  downloadModalText: {
    color: COLORS.accentLight,
    fontSize: 14,
    marginBottom: 20,
  },

  downloadModalCloseBtn: {
    width: "100%",
    backgroundColor: COLORS.accent,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },

  downloadModalCloseText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },
});