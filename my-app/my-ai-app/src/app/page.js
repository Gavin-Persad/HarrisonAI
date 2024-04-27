'use client';

import { useChat } from 'ai/react';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	return (
		<div className="chatbot">
			{messages.map((m) => (
				<div
					key={m.id}
					className="chatHistory">
					{m.role === 'user' ? 'User: ' : 'AI: '}
					{m.content}
				</div>
			))}

			<form onSubmit={handleSubmit}>
				<input
					className="inputField"
					value={input}
					placeholder="Ask me anything!"
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
