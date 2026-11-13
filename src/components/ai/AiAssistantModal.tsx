import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Loader2, 
  Cpu, 
  HelpCircle,
  CheckCircle2,
  Layers
} from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou o **DESART AI CORE**, o assistente inteligente da plataforma DESART STUDIO. Posso ajudá-lo a calcular requisitos de infraestrutura, verificar regras para domínios .co.mz, detalhes do DESART MAIL (15 GB) ou orçamentos de sistemas e pagamentos via M-Pesa. Como posso ajudar a sua empresa hoje?',
      time: 'Agora'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const samplePrompts = [
    'Qual o plano ideal para uma equipa de 8 colaboradores?',
    'Como configuro o Outlook com SSL no DESART Mail?',
    'Quais as regras para registo de domínio .co.mz?',
    'Como funciona a integração com M-Pesa e e-Mola?'
  ];

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      role: 'user',
      content: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query })
      });
      const data = await res.json();
      
      const replyMsg: Message = {
        role: 'assistant',
        content: data.reply || 'Recebemos o seu pedido. A nossa equipa e o Core estão à sua disposição.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, replyMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Desculpe, ocorreu uma instabilidade momentânea na conexão com o modelo de IA. A nossa infraestrutura central continua ativa.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl h-[620px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0B1528] text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#102447] to-[#4599FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm sm:text-base font-display">DESART AI CORE</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-[#4599FF] border border-blue-500/30">
                  Gemini Flash 2.5
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Inteligência contextual de infraestrutura digital e negócios</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/70">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-xl bg-[#0B1528] text-[#4599FF] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-[#4599FF] text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
                <div
                  className={`text-[10px] mt-1.5 text-right ${
                    msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  {msg.time}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#4599FF] flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center space-x-2 text-xs text-slate-500 p-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#4599FF]" />
              <span>O DESART AI Core está a formular a resposta técnica...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-400 font-semibold shrink-0">Sugestões:</span>
          {samplePrompts.map((s, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(s)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-[#4599FF] text-slate-700 whitespace-nowrap transition-colors shrink-0"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escreva a sua dúvida sobre domínios, e-mail, custos ou sistemas..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#4599FF]"
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              className="px-5 py-3 rounded-xl bg-[#4599FF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-md shadow-blue-500/20 disabled:opacity-50"
            >
              <span>ENVIAR</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
