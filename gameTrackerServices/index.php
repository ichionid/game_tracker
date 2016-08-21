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
    // Register game.
    $app['db']->insert('games', array(
            'away_team_name' => $request->get('away_team_name'),
            'home_team_name' => $request->get('home_team_name'),
            'away_team_final_score' => $request->get('away_team_final_score'),
            'home_team_final_score' => $request->get('home_team_final_score'),
        )
    );
    $game_id = $app['db']->lastInsertId();
    // Register starting 5 and Fireup the game.
    $app['db']->insert('squads', array(
            'players' => $request->get('players'),
            'entry_timestamp' => $request->get('entry_timestamp'),
            'home_team_score' => $request->get('home_team_score'),
            'away_team_score' => $request->get('away_team_score'),
            'gamesid' => $game_id,
        )
    );
    // Export to JSON.
    return new Response($app['db']->lastInsertId(), 200);
});

$app->post('/update_game', function (Request $request) use ($app) {
    $app['db']->insert('squads', array(
            'players' => $request->get('players'),
            'entry_timestamp' => $request->get('entry_timestamp'),
            'home_team_score' => $request->get('home_team_score'),
            'away_team_score' => $request->get('away_team_score'),
            'gamesid' => $request->get('game_id'),
        )
    );
    return new Response('Updated!', 200);
});

$app->run();