<?php

/*
* This file is part of the Certificationy Applicant project.
*
* (c) Michael COULLERET <michael.coulleret@gmail.com>
* (c) Mickaël Andrieu <andrieu.travail@gmail.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

namespace Applicant\Dbal;

use \Doctrine\DBAL\Connection as DoctrineConnection;
use Doctrine\DBAL\DriverManager;

/**
 * Connection.
 *
 * @author Michael Coulleret <michael.coulleret@francetv.fr>
 */
class Connection
{
    /**
     * @var DoctrineConnection
     */
    private $connection;

    /**
     * @var array
     */
    private $config;

    /**
     * @var array
     */
    private $parameters = [
        'dbname' => null,
        'user' => null,
        'password' => null,
        'host' => null,
        'port' => null,
        'driver' => null,
        'charset' => 'utf8mb4',
        'url' => null,
    ];

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * Create a connection by name.
     */
    public function createConnection(): DoctrineConnection
    {
//        var_dump($this->configure()['url']);die;
        $this->connection = DriverManager::getConnection($this->configure());

        return $this->connection;
    }

    /**
     * Gets the named connection.
     */
    public function getConnection(): DoctrineConnection
    {
        if (!isset($this->connection)) {
            $this->createConnection();
        }

        return $this->connection;
    }

    /**
     * Configures database.
     */
    private function configure(): array
    {
        return array_merge($this->parameters, $this->config);
    }
}
