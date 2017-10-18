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

        foreach ($categories as $category) {
            $categoriesId[] = $category['code'];
        }

        $stmt = $this->connection->prepare('INSERT INTO survey (nb_questions, categories) VALUES (:nb_questions, :categories)');

        $stmt->execute([
            'nb_questions' => $nbQuestions,
            'categories'  => implode(',', $categoriesId)
        ]);

        return $this->connection->lastInsertId();
    }

    public function getById($id)
    {
        $stmt = $this->connection->prepare("SELECT id, nb_question, categories FROM survey WHERE id = :id");

        $stmt->execute(['id' => $id]);

        return $stmt->fetchAll();
    }
}
