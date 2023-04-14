import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

export default function MainContent() {

    const url = "https://lyra.alwaysdata.net/public/api/PROJECT";

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const fetchOptions = { method: "GET" };
    useEffect(() => {
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                console.log(dataJSON);
                setProjects(dataJSON);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
        setShowDetails(true);
    };

    return (
        <>
            {showDetails && selectedProject && (
                <View style={styles.detailsContainer}>
                    <TouchableOpacity onPress={() => setShowDetails(false)}>
                        <Text style={styles.detailsCloseButton}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.detailsTitle}>{selectedProject.NAME_PROJ}</Text>
                    <Text>{selectedProject.DESCRIPTION_PROJ}</Text>
                    <Text>{selectedProject.LOCATION_PROJ}</Text>
                </View>
            )}

            {!showDetails && (
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFBBBB' }}>
                        {projects.map((project) =>
                            <TouchableOpacity key={project.ID_PROJ} onPress={() => handleProjectSelect(project)}>
                                <View style={styles.cardContainer}>
                                    <Image source={{ uri: 'https://cdn.discordapp.com/attachments/885543075152289894/1095259997241360434/project_type.jpg', }} style={styles.cardImage} />
                                    <Text style={styles.cardTitle}>{project.NAME_PROJ}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 40,
        marginTop: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20,
    },
    cardImage: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    detailsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    detailsCloseButton: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 18,
        marginBottom: 10,
    },
});