export const subscribeToEvent = async (email: string): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!email.includes('@')) {
    return { success: false, message: 'Por favor, insira um e-mail válido.' };
  }

  // Simulate success
  return { success: true, message: 'Inscrição confirmada com sucesso!' };
};