<?php
// web/index.php
require_once __DIR__.'/../vendor/autoload.php';
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver' => 'pdo_mysql',
        'dbhost' => 'localhost',
        'dbname' => 'gametracker',
        'user' => 'root',
        'password' => 'rush1212',
        'charset'   => 'utf8mb4',
    ),
));

$app->get('/blog/{id}', function ($id) use ($app) {
    $sql = "SELECT * FROM games";
    $post = $app['db']->fetchAssoc($sql, array((int) $id));
    print_r($post);
    return  "<h1>aaaa</h1>";
});
$app->get('/games', function (Request $request) use ($app) {
    $games = $app['db']->fetchAll('SELECT * FROM games');
    return $app->json($games);
});
$app->post('/create_game', function (Request $request) use ($app) {
    $app['db']->insert('games', array(
            'away_team_name' => $request->get('away_team_name'),
            'home_team_name' => $request->get('home_team_name'),
            'away_team_final_score' => $request->get('away_team_final_score'),
            'home_team_final_score' => $request->get('home_team_final_score'),
        )
    );
    // Export to JSON.
    return new Response('Game added!', 200);
});

$app->run();