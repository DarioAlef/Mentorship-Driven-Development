#!/usr/bin/env node

import { select } from '@inquirer/prompts';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import figlet from 'figlet';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Arte ASCII de Boas-Vindas
const logoText = figlet.textSync('MDD Mentor', { font: 'ANSI Shadow', horizontalLayout: 'full' });
const lines = logoText.split('\n');
lines.forEach((line, i) => {
  if (line.trim() === '') return;
  if (i < 2) console.log(chalk.magentaBright(line));
  else if (i < 4) console.log(chalk.cyanBright(line));
  else console.log(chalk.white(line));
});
const subtitle = 'Mentorship-Driven-Development Framework';
const width = lines[0] ? lines[0].length : 0;
const padding = Math.max(0, Math.floor((width - subtitle.length) / 2));
console.log('\n' + ' '.repeat(padding) + chalk.yellow.italic(subtitle) + '\n');

async function run() {
  try {
    // 2. Menu de Escolha do Agente (usando 'select' puro do @inquirer/prompts)
    const agentChoice = await select({
      message: 'Qual agente de IA você utiliza para receber as skills?',
      choices: [
        { name: 'Antigravity (pasta .agent)', value: 'antigravity' },
        { name: 'Claude Code (pasta .claude)', value: 'claude' },
        { name: 'Cursor (pasta .cursor)', value: 'cursor' },
        { name: 'Codex (pasta .codex)', value: 'codex' },
        { name: 'GitHub Copilot (pasta .github)', value: 'copilot' },
        { name: 'JetBrains AI (pasta .aiassistant)', value: 'jetbrains' },
        { name: 'Genérico (Apenas pasta .mdd)', value: 'generic' }
      ]
    });

    const sourceDir = path.join(__dirname, '../templates');
    const cwd = process.cwd();

    // 3. Roteamento baseado na escolha
    if (agentChoice === 'antigravity') {
      const targetDir = path.join(cwd, '.agent/skills');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'skills'), targetDir);
      console.log(chalk.green(`✔ Skills do MDD injetadas em: ${chalk.bold('.agent/skills/')}`));

    } else if (agentChoice === 'claude') {
      const targetDir = path.join(cwd, '.claude/skills');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'skills'), targetDir);
      console.log(chalk.green(`✔ Skills do MDD injetadas em: ${chalk.bold('.claude/skills/')}`));

    } else if (agentChoice === 'cursor') {
      const targetDir = path.join(cwd, '.cursor/rules');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'rules'), targetDir);
      console.log(chalk.green(`✔ Regras do MDD injetadas em: ${chalk.bold('.cursor/rules/')}`));

    } else if (agentChoice === 'codex') {
      const targetDir = path.join(cwd, '.codex/skills');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'skills'), targetDir);
      console.log(chalk.green(`✔ Skills do MDD injetadas em: ${chalk.bold('.codex/skills/')}`));

    } else if (agentChoice === 'copilot') {
      const targetDir = path.join(cwd, '.github/copilot-instructions');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'skills'), targetDir);
      console.log(chalk.green(`✔ Skills do MDD injetadas em: ${chalk.bold('.github/copilot-instructions/')}`));

    } else if (agentChoice === 'jetbrains') {
      const targetDir = path.join(cwd, '.aiassistant/rules');
      fs.ensureDirSync(targetDir);
      fs.copySync(path.join(sourceDir, 'skills'), targetDir);
      console.log(chalk.green(`✔ Skills do MDD injetadas em: ${chalk.bold('.aiassistant/rules/')}`));

    } else if (agentChoice === 'generic') {
      console.log(chalk.yellow(`ℹ Setup Genérico: Nenhuma regra extra será copiada, apenas a estrutura base.`));
    }

    // 4. Criação da estrutura base
    const baseTargetDir = path.join(cwd, '.mdd');
    fs.ensureDirSync(baseTargetDir);
    fs.copySync(path.join(sourceDir, 'base'), baseTargetDir);
    
    // Cria a pasta de specs para o usuário
    const specsTargetDir = path.join(cwd, 'specs');
    fs.ensureDirSync(specsTargetDir);
    fs.ensureDirSync(path.join(specsTargetDir, 'learned'));
    
    console.log(chalk.green(`✔ Estrutura de aprendizado base criada em: ${chalk.bold('.mdd/')}`));
    console.log(chalk.green(`✔ Pasta de especificações preparada em: ${chalk.bold('specs/')} (e ${chalk.bold('specs/learned/')})`));

    console.log(chalk.cyan('\n🚀 Tudo pronto! O fluxo recomendado é:'));
    console.log(chalk.white(`   1. ${chalk.bold('/mdd-ideate')}    - Para criar sua especificação em specs/`));
    console.log(chalk.white(`   2. ${chalk.bold('/mdd-challenge')} - Para gerar seus desafios de código`));
    console.log(chalk.white(`   3. ${chalk.bold('/mdd-review')}    - Para revisar seu progresso e aprender`));
    console.log(chalk.white(`   4. ${chalk.bold('/mdd-learned')}   - Para consolidar o aprendizado e limpar o projeto`));
    console.log(chalk.cyan('\nAbra seu agente de IA e vamos começar!'));

  } catch (err) {
    if (err.name === 'ExitPromptError') {
      console.log(chalk.yellow('\n⚠ Configuração cancelada pelo usuário.'));
    } else {
      console.error(chalk.red('Erro ao inicializar o MDD:'), err);
    }
  }
}

run();
