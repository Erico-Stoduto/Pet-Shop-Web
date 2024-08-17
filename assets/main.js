// cadastro
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirm-email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (email !== confirmEmail) {
            alert('Os e-mails não coincidem.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        form.submit();

        setTimeout(function () {
            window.location.href = 'confirmacaoCadastro.html';
        }, 3000);
    });
});

//cadastroPet
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroPetForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        form.submit();

        setTimeout(function () {
            window.location.href = 'agendamento.html';
        }, 3000);
    });
});

// agendamento
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const teleBusca = document.querySelector('input[name="tele-busca"]:checked').value;

        if (teleBusca === 'nao') {
            form.submit();
            setTimeout(function () {
                window.location.href = 'confirmacaoAgendamento.html';
            }, 3000);
        } else {
            form.submit();
            setTimeout(function () {
                window.location.href = 'teleBusca.html';
            }, 3000);
        }
    });
});

// tele-busca
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('teleBuscaForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        form.submit();

        setTimeout(function () {
            window.location.href = 'confirmacaoTeleBusca.html';
        }, 5000);
    });
});