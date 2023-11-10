import { getUsers } from "../services/api";

export function checkName(name: string) {
  if (name.length >= 3) {
    return true;
  }
  alert("Insira um nome com pelo menos 3 caracteres");
  return false;
}

export async function checkEmail(email: string) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regex.test(email)) {
    return true;
  }
  alert("E-mail não existe!");
  return false;
}

export function checkPass(pass: string, confirmPass: string) {
  const regex =
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

  if (regex.test(pass)) {
    if (pass === confirmPass) {
      return true;
    }
    alert("As senhas fornecidas não são iguais.");
  } else {
    alert(
      "Senha muito fraca. Por favor, insira uma senha com no mínimo 8 caracteres, pelo menos uma letra maiuscula, pelo menos uma letra minúscula e que contenha pelo menos um caractere especial."
    );
  }
  return false;
}
