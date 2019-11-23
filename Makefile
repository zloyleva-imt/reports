include .env


up: # create and start containers
	@docker-compose -f ${DOCKER_CONFIG} up -d

down: # stop and destroy containers
	@docker-compose -f ${DOCKER_CONFIG} down

down-volume: #  WARNING: stop and destroy containers with volumes
	@docker-compose -f ${DOCKER_CONFIG} down -v

start: # start already created containers
	@docker-compose -f ${DOCKER_CONFIG} start

stop: # stop containers, but not destroy
	@docker-compose -f ${DOCKER_CONFIG} stop

ps: # show started containers and their status
	@docker-compose -f ${DOCKER_CONFIG} ps

build: # build all dockerfile, if not built yet
	@docker-compose -f ${DOCKER_CONFIG} build


connect_app: # app command line
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app sh

connect_node: # node command line
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/frontend node sh

connect_nginx: # nginx command line
	@docker-compose -f ${DOCKER_CONFIG} exec -w /www nginx sh

connect_db: # database command line
	@docker-compose -f ${DOCKER_CONFIG} exec db bash


database-open:
	@docker-compose -f ${DOCKER_CONFIG} exec db mysql -uroot -p${DOCKER_PASSWORD} ${DOCKER_DATABASE}

database-dump: # dump database
	@docker-compose -f ${DOCKER_CONFIG} exec db bash -c "mysqldump ${DOCKER_DATABASE} -u${DOCKER_USERNAME} -p${DOCKER_PASSWORD} 2> /dev/null"


vendor: # composer install
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app composer install

node_modules: # npm install
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/frontend node npm install

watch: # npm run watch
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel node npm run development -- --watch

install_npm: # npm run watch
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel node npm i

key: # gen application key
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan key:generate

fresh: jwt # refresh the database and run all database seeds
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan migrate:fresh --seed

jwt: # refresh the jwt secret
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app  php artisan jwt:secret -f

routes: # routes
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app  php artisan route:list

composer_dump: # composer dump-autoload
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app composer dump-autoload

test: # run all tests
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php vendor/bin/phpunit

dusk: # browser tests
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan dusk


create_controller: # create controller name=[controllerName]
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan make:controller $(name)

create_model: # create model name=[modelName]
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan make:model Models/$(name) -a

create_seeder: # create seeder name=[seederName]
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app php artisan make:seeder $(name)TableSeeder



start_react: # npm run serve
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/frontend node npm start

build_react: # npm run serve
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/frontend node npm run build

swagger: # generate swagger doc
	@docker-compose -f ${DOCKER_CONFIG} exec -u www -w /www/laravel app  php artisan l5-swagger:generate