#!/usr/bin/env node

const [major] = process.versions.node.split('.').map(Number);

if (major < 20) {
  console.error('\x1b[31m[Erro] O pacote @darioalef/mdd requer o Node.js versão 20.12.0 ou superior.\x1b[0m');
  console.error('\x1b[33mVocê está usando o Node.js v' + process.versions.node + '.\x1b[0m');
  console.error('\x1b[33mPor favor, atualize o Node.js para continuar.\x1b[0m');
  process.exit(1);
}

// Se o Node for suportado, carrega o módulo principal ESM
import('./index.js').catch(err => {
  console.error('\x1b[31m[Erro] Falha ao carregar o módulo principal do MDD.\x1b[0m');
  console.error(err);
  process.exit(1);
});
