FIG=docker-compose

server:
	php -S localhost:8080 -t public

start: up info

stop:
	$(FIG) kill

bash:
	$(FIG) run --rm app bash

up:
	$(FIG) up -d

logs:
	@$(FIG) logs --follow app

info:
	@echo ""
	@echo "\033[92m[OK] Application running on https://localhost:8080\033[0m"
	@echo ""
