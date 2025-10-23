// app/(tabs)/index.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const days = [
    { d: "Sun", h: 18 },
    { d: "Mon", h: 28 },
    { d: "Tue", h: 22 },
    { d: "Wed", h: 26 },
    { d: "Thu", h: 30 },
];

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-surface-bg">
            <ScrollView
                className="flex-1 px-4 pt-4"
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <Text className="greeting">Good morning, Abdi 👋</Text>
                <Text className="subtle">Here's what's happening today</Text>

                {/* Today Schedule */}
                <View className="card">
                    <Text className="card-title">Today's Schedule</Text>
                    <Text className="card-text">CS101 - Software Engineering</Text>
                    <Text className="card-sub mt-0.5">10:00 AM – 11:50 AM</Text>
                    <Text className="card-sub">Room A302</Text>
                </View>

                {/* Upcoming */}
                <View className="card">
                    <Text className="card-title">Upcoming</Text>
                    <Text className="card-text">Linear Algebra – Tomorrow, 9 AM</Text>
                </View>

                {/* Attendance */}
                <View className="card-attendance">
                    <View className="card-attendance-inner">
                        <Text className="attendance-title">Weekly Attendance Summary</Text>

                        {/* прогресс 92% */}
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-sm text-slate-700">92%</Text>
                        </View>
                        <View className="progress">
                            <View style={{ width: "92%" }} className="progress-fill" />
                        </View>

                        {/* мини-диаграмма */}
                        <View className="bar-wrap">
                            {days.map(({ d, h }) => (
                                <View key={d} className="bar-col">
                                    <View style={{ height: h }} className="bar-rect" />
                                    <Text className="bar-label">{d}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* News */}
                <View className="news-card mb-6">
                    <Text className="card-title">Latest from the Journal</Text>
                    <View className="news-row">
                        <View className="news-item">
                            <Ionicons name="trophy-outline" size={28} color="#f59e0b" />
                            <Text className="news-text">University Hackathon announced…</Text>
                        </View>
                        <View className="news-item">
                            <Ionicons name="business-outline" size={28} color="#3b82f6" />
                            <Text className="news-text">New library wing opens…</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
