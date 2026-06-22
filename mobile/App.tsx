import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';

// Interface tipando a estrutura de telemetria recebida da API
interface StatusRobo {
  id: string;
  bateria: number;
  umidadeSolo: number;
  danificado: boolean;
}

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [statusRobo, setStatusRobo] = useState<StatusRobo | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Simulação de chamada HTTP à API AgroCore
  const buscarDadosTelemetria = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulando delay de resposta da rede
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const dadosMockados: StatusRobo = {
        id: "ROBO-EB01",
        bateria: 84,
        umidadeSolo: 42.5,
        danificado: false
      };
      
      setStatusRobo(dadosMockados);
    } catch (err) {
      setError('Não foi possível conectar ao protótipo em campo.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    buscarDadosTelemetria();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    buscarDadosTelemetria();
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text style={styles.loadingText}>Buscando telemetria do Eve's Bloom...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <Text style={styles.titulo}>🌱 Central Eve's Bloom</Text>
      
      {statusRobo && (
        <View style={styles.card}>
          <Text style={styles.label}>ID do Equipamento: <Text style={styles.valor}>{statusRobo.id}</Text></Text>
          <Text style={styles.label}>Nível de Bateria: <Text style={[styles.valor, {color: statusRobo.bateria < 20 ? 'red' : 'green'}]}>{statusRobo.bateria}%</Text></Text>
          <Text style={styles.label}>Umidade do Solo: <Text style={styles.valor}>{statusRobo.umidadeSolo}%</Text></Text>
          <Text style={styles.label}>Status Físico: <Text style={styles.valor}>{statusRobo.danificado ? '⚠️ ALERTA DE AVARIA' : '✅ Operando Normal'}</Text></Text>
        </View>
      )}
      
      <Text style={styles.footer}>Arraste para baixo para atualizar os dados</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  valor: {
    fontWeight: 'normal',
    color: '#666',
  },
  loadingText: {
    marginTop: 10,
    color: '#2e7d32',
  },
  footer: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 30,
  }
});
