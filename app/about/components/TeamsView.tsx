import React from 'react';
import { useTeamMember } from '@/service/apiHooks/team-member.hook';
import { useTeamCategory } from '@/service/apiHooks/team-category.hook';
import { imageurlgenerator } from '@/utils/imageurlgenerator';
import Image from 'next/image';
import { motion } from 'framer-motion';

function TeamsView() {
    const { data: teamMembers, isLoading: loadingMembers } = useTeamMember();
    const { data: teamCategories, isLoading: loadingCategories } = useTeamCategory();

    if (loadingMembers || loadingCategories) {
        return <div className="text-center py-8">Loading team information...</div>;
    }

    if (!teamMembers || !teamCategories) {
        return <div className="text-center py-8 text-red-500">Failed to load team data.</div>;
    }

    // Group members by category id
    const grouped: Record<number, typeof teamMembers[0][]> = {};
    teamMembers.forEach(member => {
        if (!grouped[member.teamCategoryId]) grouped[member.teamCategoryId] = [];
        grouped[member.teamCategoryId].push(member);
    });

    return (
        <div className="space-y-12">
            {(teamCategories || [])
                ?.filter(cat => cat.isActive && !cat.isDeleted)
                ?.map((category, catIdx) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                    >
                        <motion.h3
                            className="text-2xl font-bold mb-6 text-blue-900 border-b pb-2 border-blue-200"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 + 0.1 }}
                        >
                            {category.title}
                        </motion.h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            {(grouped[category.id] || []).length === 0 ? (
                                <div className="col-span-4 text-gray-500 text-center">No members in this category.</div>
                            ) : (
                                grouped[category.id].map((member, idx) => (
                                    <motion.div
                                        key={member.id}
                                        className="bg-white p-6 text-center border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    >
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                                            <Image
                                                src={imageurlgenerator(member.imageUrl)}
                                                alt={member.memberName}
                                                className="object-cover w-full h-full"
                                                loading="lazy"
                                                width={200}
                                                height={200}
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-1 text-lg">{member.memberName}</h4>
                                        <p className="text-sm text-gray-600 mb-1">{member.position}</p>
                                        <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                                        <p className="text-xs text-gray-400">{member.email}</p>
                                        <p className="text-xs text-gray-400">{member.contact}</p>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                ))}
        </div>
    );
}

export default TeamsView;