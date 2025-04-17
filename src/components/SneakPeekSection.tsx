
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, Wifi, Calendar, Inbox, CheckSquare, Users } from "lucide-react";

const SneakPeekSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja um vislumbre do que estamos a construir 👀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Queremos criar uma ferramenta onde tudo flui: o hóspede encontra tudo num único lugar, e o gestor responde tudo num só painel. Com IA, sem stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Guest View */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <Card className="overflow-hidden shadow-lg glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Portal do Hóspede</h3>
                  <span className="bg-coral/10 text-coral text-xs font-medium py-1 px-2 rounded-full">
                    Acesso com PIN
                  </span>
                </div>
                
                <div className="space-y-6">
                  {/* Chat interface */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare size={18} className="text-coral" />
                      <h4 className="font-medium">Chat com Respostas Automáticas</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3 ml-auto max-w-[75%] text-sm">
                        A que horas posso fazer o check-in?
                      </div>
                      <div className="bg-coral/10 rounded-lg p-3 max-w-[75%] text-sm">
                        Olá! O check-in é das 15:00 às 20:00. Precisa de horário diferente?
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <input type="text" className="w-full rounded-lg border border-gray-300 py-2 px-3 text-sm" placeholder="Escreva a sua mensagem..." />
                      <button className="coral-gradient p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Stay details */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={18} className="text-coral" />
                      <h4 className="font-medium">Detalhes da Estadia</h4>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-gray-500" />
                          <span>Check-in</span>
                        </div>
                        <span className="font-medium">12 Jun, 15:00-20:00</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-2">
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-gray-500" />
                          <span>Check-out</span>
                        </div>
                        <span className="font-medium">15 Jun, até 11:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Wifi size={16} className="text-gray-500" />
                          <span>Wi-Fi</span>
                        </div>
                        <span className="font-medium">HostsyGuest / 12345678</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Host Dashboard */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <Card className="overflow-hidden shadow-lg glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Dashboard do Gestor</h3>
                  <span className="bg-coral/10 text-coral text-xs font-medium py-1 px-2 rounded-full">
                    Painel Unificado
                  </span>
                </div>
                
                <div className="space-y-6">
                  {/* Unified inbox */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Inbox size={18} className="text-coral" />
                      <h4 className="font-medium">Inbox Unificada</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600"><path d="M21 9C21 12.87 17.64 16 13.5 16L16.5 19M13 4C8.86 4 5.5 7.13 5.5 11C5.5 14.87 8.86 18 13 18C17.14 18 20.5 14.87 20.5 11C20.5 7.13 17.14 4 13 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Maria Silva</p>
                          <p className="text-xs text-gray-500">A que horas posso fazer o check-in?</p>
                        </div>
                        <span className="text-xs text-gray-400">12:42</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600"><path d="M18 9C18 12.87 14.64 16 10.5 16L13.5 19M3 13C3 9.13 6.36 6 10.5 6L7.5 3M10 4C5.86 4 2.5 7.13 2.5 11C2.5 14.87 5.86 18 10 18C14.14 18 17.5 14.87 17.5 11C17.5 7.13 14.14 4 10 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">João Ferreira</p>
                          <p className="text-xs text-gray-500">O aquecedor não está a funcionar...</p>
                        </div>
                        <span className="text-xs text-gray-400">09:15</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600"><path d="M17.6 6.32c.45.45.8 1 1.01 1.58a5.7 5.7 0 0 1-1.01 5.13c-.35.36-.35.91 0 1.27.36.35.92.35 1.27 0a7.63 7.63 0 0 0 1.3-8.26c-.33-.77-.8-1.47-1.36-2.04-.36-.35-.92-.35-1.27 0-.35.36-.35.91 0 1.27l.06.05zM19.97 3.94c-.31-.32-.85-.32-1.17 0-.32.32-.32.84 0 1.16l.04.05c.56.55.99 1.21 1.25 1.92.26.72.4 1.5.4 2.28 0 1.85-.73 3.52-1.93 4.73-.32.33-.32.85 0 1.17.32.31.85.31 1.17 0a8.46 8.46 0 0 0 2.46-5.9c0-.97-.16-1.91-.48-2.78a8.7 8.7 0 0 0-1.61-2.49l-.13-.14z" fill="currentColor"/><path d="M16.11 14.77l-3.35 3.35-1.4-1.4c-.32-.32-.83-.32-1.15 0a.81.81 0 0 0 0 1.15l1.97 1.97c.32.32.84.32 1.16 0l3.92-3.92c.32-.32.32-.84 0-1.15-.32-.32-.84-.32-1.15 0z" fill="currentColor"/><path d="M12.48 16.32a1.61 1.61 0 0 1-2.28 0L5.92 12.7a5.3 5.3 0 0 1 .23-7.77 5.54 5.54 0 0 1 5.82-.63c.67.35 1.24.84 1.7 1.42.45-.58 1.02-1.07 1.7-1.42.31-.17.65.07.65.42v7.12c0 .23-.1.45-.26.6l-3.28 3.88z" stroke="currentColor" strokeWidth="1.5"/></svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Ana Santos</p>
                          <p className="text-xs text-gray-500">Posso fazer late check-out amanhã?</p>
                        </div>
                        <span className="text-xs text-gray-400">Ontem</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Responses */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral">
                        <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14.5 9.5L9 12.5L14.5 15.5V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <h4 className="font-medium">Respostas IA</h4>
                    </div>
                    
                    <div className="bg-coral/5 border border-coral/20 p-3 rounded-lg text-sm">
                      <p className="font-medium mb-2">Sugestão de resposta:</p>
                      <p>Olá Maria! O check-in é das 15:00 às 20:00. Se precisar de um horário diferente, por favor avise com antecedência para verificarmos a disponibilidade. Obrigado!</p>
                      <div className="mt-3 flex gap-2">
                        <button className="w-1/2 py-1.5 px-3 bg-coral text-white rounded-md text-sm font-medium">
                          Enviar
                        </button>
                        <button className="w-1/2 py-1.5 px-3 border border-coral/30 text-coral rounded-md text-sm font-medium">
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tasks section */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckSquare size={18} className="text-coral" />
                      <h4 className="font-medium">Tarefas Inteligentes</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="rounded text-coral focus:ring-coral" />
                          <span className="text-sm">Verificar aquecedor - Apt 302</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-coral/10 p-1 rounded-full">
                            <Users size={14} className="text-coral" />
                          </div>
                          <span className="ml-1 text-xs">Miguel</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="rounded text-coral focus:ring-coral" />
                          <span className="text-sm">Confirmar late check-out - Apt 401</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-coral/10 p-1 rounded-full">
                            <Users size={14} className="text-coral" />
                          </div>
                          <span className="ml-1 text-xs">Sofia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeekSection;
