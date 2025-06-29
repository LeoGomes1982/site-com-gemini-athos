// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const mainContentArea = document.getElementById('main-content');

    // Mapeamento de seções para o conteúdo HTML (inicialmente com placeholders)
    const sectionsContent = {
        'dp-rh': `
            <section class="section-dp-rh">
                <h2><i class="fas fa-users-gear icon-title"></i> DP e RH</h2>
                <p>Gerencie tudo relacionado a Departamento Pessoal e Recursos Humanos.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="funcionarios">
                        <i class="fas fa-users icon-card"></i>
                        <h3>Funcionários</h3>
                        <p>Cadastro, informações e dados pessoais.</p>
                    </div>
                    <div class="section-card" data-subsection="admissao-online">
                        <i class="fas fa-user-plus icon-card"></i>
                        <h3>Admissão Online</h3>
                        <p>Novas contratações de forma eficiente.</p>
                    </div>
                    <div class="section-card" data-subsection="plano-cargos-salarios">
                        <i class="fas fa-chart-line icon-card"></i>
                        <h3>Plano de Cargos e Salários</h3>
                        <p>Estrutura de carreira e remuneração.</p>
                    </div>
                    <div class="section-card" data-subsection="documentos-rh">
                        <i class="fas fa-file-alt icon-card"></i>
                        <h3>Documentos RH</h3>
                        <p>Arquivos e gestão de documentos.</p>
                    </div>
                    <!-- Adicionar mais subseções de DP e RH aqui -->
                </div>
            </section>
        `,
        'comercial': `
            <section class="section-comercial">
                <h2><i class="fas fa-handshake icon-title"></i> Comercial</h2>
                <p>Gestão de clientes, propostas e contratos.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="clientes">
                        <i class="fas fa-address-book icon-card"></i>
                        <h3>Clientes</h3>
                        <p>Cadastro e histórico de clientes.</p>
                    </div>
                    <div class="section-card" data-subsection="propostas-servicos">
                        <i class="fas fa-file-signature icon-card"></i>
                        <h3>Propostas de Serviços</h3>
                        <p>Crie e gerencie propostas.</p>
                    </div>
                    <div class="section-card" data-subsection="contratos">
                        <i class="fas fa-file-contract icon-card"></i>
                        <h3>Confecção de Contratos</h3>
                        <p>Gerador e arquivo de contratos.</p>
                    </div>
                    <!-- Adicionar mais subseções comerciais aqui -->
                </div>
            </section>
        `,
        'operacional': `
            <section class="section-operacional">
                <h2><i class="fas fa-cogs icon-title"></i> Operacional</h2>
                <p>Supervisão de serviços e fiscalizações.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="fiscalizacoes">
                        <i class="fas fa-clipboard-check icon-card"></i>
                        <h3>Fiscalizações</h3>
                        <p>Acompanhamento de funcionários e postos.</p>
                    </div>
                    <div class="section-card" data-subsection="fornecedores">
                        <i class="fas fa-truck icon-card"></i>
                        <h3>Fornecedores</h3>
                        <p>Cadastro e gestão de fornecedores.</p>
                    </div>
                    <!-- Adicionar mais subseções operacionais aqui -->
                </div>
            </section>
        `,
        'agenda': `
            <section class="section-agenda">
                <h2><i class="fas fa-calendar-alt icon-title"></i> Agenda e Lista Telefônica</h2>
                <p>Organize seus compromissos e contatos.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="agenda-compromissos">
                        <i class="fas fa-calendar-day icon-card"></i>
                        <h3>Agenda de Compromissos</h3>
                        <p>Eventos e lembretes importantes.</p>
                    </div>
                    <div class="section-card" data-subsection="lista-telefonica">
                        <i class="fas fa-phone icon-card"></i>
                        <h3>Lista Telefônica</h3>
                        <p>Contatos internos e externos.</p>
                    </div>
                    <!-- Adicionar mais subseções de agenda/contatos aqui -->
                </div>
            </section>
        `,
        'manuais-configuracoes': `
            <section class="section-manuais-configuracoes">
                <h2><i class="fas fa-book icon-title"></i> Manuais e Configurações</h2>
                <p>Acesso a manuais e ajustes do sistema.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="manuais-normas">
                        <i class="fas fa-file-alt icon-card"></i>
                        <h3>Manuais e Normas</h3>
                        <p>Documentos internos e procedimentos.</p>
                    </div>
                    <div class="section-card" data-subsection="configuracoes-sistema">
                        <i class="fas fa-cogs icon-card"></i>
                        <h3>Configurações do Sistema</h3>
                        <p>Ajustes e personalização.</p>
                    </div>
                    <!-- Adicionar mais subseções de manuais/configurações aqui -->
                </div>
            </section>
        `,
        'reclamacoes-denuncias': `
            <section class="section-reclamacoes-denuncias">
                <h2><i class="fas fa-flag icon-title"></i> Reclamações e Denúncias</h2>
                <p>Canal para registro e acompanhamento.</p>
                <div class="section-grid">
                    <div class="section-card" data-subsection="registrar-nova">
                        <i class="fas fa-plus-circle icon-card"></i>
                        <h3>Registrar Nova</h3>
                        <p>Envie uma nova reclamação/denúncia.</p>
                    </div>
                    <div class="section-card" data-subsection="acompanhar-status">
                        <i class="fas fa-search icon-card"></i>
                        <h3>Acompanhar Status</h3>
                        <p>Verifique o andamento das solicitações.</p>
                    </div>
                    <!-- Adicionar mais subseções aqui -->
                </div>
            </section>
        `
        // Adicionar mais seções conforme a necessidade
    };

    // Função para carregar o conteúdo da seção
    function loadSectionContent(sectionId) {
        // Define o conteúdo da área principal com base no ID da seção
        mainContentArea.innerHTML = sectionsContent[sectionId] || `
            <section class="welcome-section">
                <h2>Seção Não Encontrada</h2>
                <p>Ocorreu um erro ao carregar o conteúdo. Por favor, tente novamente.</p>
            </section>
        `;
    }

    // Adiciona o evento de clique a cada item de navegação
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Remove a classe 'active' de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');

            // Obtém o ID da seção a partir do atributo data-section
            const sectionId = item.dataset.section;

            // Carrega o conteúdo correspondente
            loadSectionContent(sectionId);
        });
    });

    // Carrega o conteúdo da seção "DP e RH" ao iniciar (se existir um ativo)
    const initialActiveSection = document.querySelector('.nav-item.active');
    if (initialActiveSection) {
        loadSectionContent(initialActiveSection.dataset.section);
    } else {
        // Se não houver um ativo inicial, carrega uma seção padrão ou de boas-vindas
        loadSectionContent('dp-rh'); // Ou 'welcome' se você criar uma seção inicial diferente
    }
});
