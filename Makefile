.PHONY: up stop down

up:
	docker compose up --build --detach

stop:
	docker compose stop

down:
	docker compose down
