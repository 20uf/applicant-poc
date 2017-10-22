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

namespace Applicant\Manager;

use Applicant\Dbal\Connection;

/**
 * Survey manager.
 */
class SurveyManager
{
    /**
     * @var Connection
     */
    private $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection->getConnection();
    }

    public function create($nbQuestions, $categories): string
    {
        $categoriesId = [];
        $token = md5(uniqid(rand(), true));

        foreach ($categories as $category) {
            $categoriesId[] = $category['name'];
        }

        $stmt = $this->connection->prepare('INSERT INTO survey (nb_questions, categories, token) VALUES (:nb_questions, :categories, :token)');

        $stmt->execute([
            'nb_questions' => $nbQuestions,
            'categories' => implode(',', $categoriesId),
            'token' => $token,
        ]);

        return $token;
    }

    public function getByToken($token): array
    {
        $stmt = $this->connection->prepare("SELECT nb_questions, categories FROM survey WHERE token = :token");

        $stmt->execute(['token' => $token]);

        return $stmt->fetch();
    }
}
