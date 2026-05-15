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
console.log(chalk.cyan(figlet.textSync('MDD Mentor', { horizontalLayout: 'full' })));
console.log(chalk.gray('Mentorship-Driven Development Framework\n'));

async function run() {
  try {
    // 2. Menu de Escolha do Agente (usando 'select' puro do @inquirer/prompts)
    const agentChoice = await select({
      message: 'Qual agente de IA você utiliza para receber as skills?',
      choices: [
        { name: 'Antigravity (pasta .agent)', value: 'antigravity' },
        { name: 'Claude Code (pasta .claude)', value: 'claude' },
        { name: 'Cursor (pasta .cursor)', value: 'cursor' },
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

    } else if (agentChoice === 'generic') {
      console.log(chalk.yellow(`ℹ Setup Genérico: Nenhuma regra extra será copiada, apenas a estrutura base.`));
    }

    // Copia a estrutura base de arquivos do aluno (.mdd) independentemente do agente
    const baseTargetDir = path.join(cwd, '.mdd');
    fs.ensureDirSync(baseTargetDir);
    fs.copySync(path.join(sourceDir, 'base'), baseTargetDir);
    console.log(chalk.green(`✔ Estrutura de aprendizado base criada em: ${chalk.bold('.mdd/')}`));
    
    console.log(chalk.cyan('\n🚀 Tudo pronto! Abra seu agente e digite /mdd-ideate para começar.'));

  } catch (err) {
    if (err.name === 'ExitPromptError') {
      console.log(chalk.yellow('\n⚠ Configuração cancelada pelo usuário.'));
    } else {
      console.error(chalk.red('Erro ao inicializar o MDD:'), err);
    }
  }
}

run();
